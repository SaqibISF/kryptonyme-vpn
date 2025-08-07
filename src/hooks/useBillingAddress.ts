import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import {
  GET_BILLING_ADDRESS_ROUTE,
  UPDATE_BILLING_ADDRESS_ROUTE,
} from "@/lib/constants";
import { useSession } from "next-auth/react";
import { useAppState } from "./useAppState";
import { useDispatch } from "react-redux";
import { setBillingAddress } from "@/store/app.slice";
import { BillingAddress } from "@/types/app.state";
import { addToast } from "@heroui/react";

export function useBillingAddress(token?: string | null) {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { billingAddress, isBillingAddressLoadedOnce } = useAppState();

  const [isBillingAddressLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const updateBillingAddress = async ({
    address,
    onSuccess,
    onFailure,
  }: {
    address: BillingAddress;
    onSuccess?: (address: BillingAddress) => void;
    onFailure?: (message: string) => void;
  }) => {
    try {
      setLoading(true);
      const res = await axios
        .post<{
          status: boolean;
          message: string;
          user: { billing_address: BillingAddress };
        }>(UPDATE_BILLING_ADDRESS_ROUTE, address, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${session?.user.access_token}`,
          },
        })
        .then((res) => res.data);

      if (res.status) {
        dispatch(setBillingAddress(res.user.billing_address));
        addToast({ color: "success", description: res.message });
        if (onSuccess) onSuccess(res.user.billing_address);
      } else {
        addToast({ color: "danger", description: res.message });
        if (onFailure) onFailure(res.message);
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response?.data.message
          : error instanceof Error
          ? error.message
          : "Failed to add billing address. Please try again.";
      addToast({ color: "danger", description: errorMessage });
      if (onFailure) onFailure(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBillingAddress = async () => {
      try {
        if (isBillingAddressLoadedOnce) return;

        if (!token && !session) return;

        const res = await axios
          .get<{ status: boolean; user: { billing_address: BillingAddress } }>(
            GET_BILLING_ADDRESS_ROUTE,
            {
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${
                  token ? token : session?.user.access_token
                }`,
              },
            }
          )
          .then((res) => res.data);

        if (res.status) {
          dispatch(setBillingAddress(res.user.billing_address));
        } else {
          setError("Billing address not found.");
        }
      } catch (error) {
        const msg =
          error instanceof AxiosError
            ? error.response?.data.message
            : error instanceof Error
            ? error.message
            : "Error fetching billing address";
        setError(msg);
        addToast({ color: "danger", description: msg });
      } finally {
        setLoading(false);
      }
    };

    fetchBillingAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  return {
    billingAddress,
    isBillingAddressLoading,
    updateBillingAddress,
    error,
  };
}

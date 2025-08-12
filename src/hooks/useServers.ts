import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { setServers } from "@/store/servers.slice";
import axios, { AxiosError } from "axios";
import { GET_SERVERS_ROUTE } from "@/lib/constants";
import { Server } from "@/types/server";
import { addToast } from "@heroui/react";

export const useServers = () => {
  const dispatch = useDispatch();
  const { servers, totalServers, isServersLoadedOnce } = useSelector(
    (state: RootState) => state.servers
  );

  const [isServersLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServers = async () => {
      try {
        if (isServersLoadedOnce) return;
        const res = await axios
          .get<{ data: Server[]; meta: { total: number } }>(
            GET_SERVERS_ROUTE(1),
            {
              headers: {
                Accept: "application/json",
              },
            }
          )
          .then((res) => res.data);

        dispatch(
          setServers({ servers: res.data, totalServers: res.meta.total })
        );
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Load Servers";
        addToast({ color: "danger", description: errorMessage });
      } finally {
        setLoading(false);
      }
    };

    fetchServers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { servers, totalServers, isServersLoading } as const;
};

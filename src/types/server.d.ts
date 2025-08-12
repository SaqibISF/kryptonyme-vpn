export type Server = {
  name: string;
  status: number;
  type: string;
  image_url: string;
  sub_server: {
    name: string;
    status: number;
  };
};

export type ServersState = {
  servers: Server[];
  isServersLoadedOnce: boolean;
  totalServers: number;
};

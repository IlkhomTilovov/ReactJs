import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as libary } from "../assets/icons/library.svg";
import { ReactComponent as explore } from "../assets/icons/explore.svg";
import { ReactComponent as subscription } from "../assets/icons/subscription.svg";
import { ReactComponent as history } from "../assets/icons/history.svg";
import { ReactComponent as vashVideo } from "../assets/icons/vashVideo.svg";
import { ReactComponent as wtach } from "../assets/icons/wtach.svg";
import { ReactComponent as like } from "../assets/icons/like.svg";
import { ReactComponent as down } from "../assets/icons/down.svg";
import { ReactComponent as user } from "../assets/icons/user.svg";
import { ReactComponent as set } from "../assets/icons/settings.svg";
import { ReactComponent as pre } from "../assets/icons/premium.svg";
import { ReactComponent as help } from "../assets/icons/help.svg";
import { ReactComponent as shopping } from "../assets/icons/shopping.svg";
import styled from "styled-components";

const Icons = styled.div``;

Icons.Home = styled(home)`
  width: 20px;
  height: 20px;
`;
Icons.Libary = styled(libary)`
  width: 16px;
  height: 16px;
`;
Icons.Explore = styled(explore)`
  width: 22px;
  height: 22px;
`;
Icons.Subs = styled(subscription)`
  width: 20px;
  height: 20px;
`;
Icons.History = styled(history)`
  width: 20px;
  height: 20px;
`;
Icons.VashVideo = styled(vashVideo)`
  width: 20px;
  height: 20px;
`;
Icons.Wtach = styled(wtach)`
  width: 20px;
  height: 20px;
`;
Icons.Like = styled(like)`
  width: 20px;
  height: 20px;
`;
Icons.Down = styled(down)`
  width: 20px;
  height: 20px;
`;
Icons.User = styled(user)`
  width: 20px;
  height: 20px;
`;
Icons.Set = styled(set)`
  width: 20px;
  height: 20px;
`;
Icons.Pre = styled(pre)`
  width: 20px;
  height: 20px;
`;
Icons.Help = styled(help)`
  width: 20px;
  height: 20px;
`;
Icons.Shop = styled(shopping)`
  width: 20px;
  height: 20px;
`;

export const side = [
  {
    id: 1,
    data: [
      { id: 1, title: "Home", icon: Icons.Home, },
      { id: 2, title: "Explore", icon: Icons.Explore },
      { id: 3, title: "Subscription", icon: Icons.Subs },
    ],
  },
  {
    id: 2,
    data: [
      { id: 1, title: "Libary", icon: Icons.Libary },
      { id: 2, title: "Hsitory", icon: Icons.History },
      { id: 3, title: "Your videos", icon: Icons.VashVideo },
      { id: 4, title: "Watch later", icon: Icons.Wtach },
      { id: 5, title: "Liked videos", icon: Icons.Like },
      { id: 6, title: "Show more", icon: Icons.Down },
    ],
  },
  {
    id: 3,
    title: "Subscriptions",
    data: [
      { id: 1, title: "Ilkom Tilovov", icon: Icons.User },
      { id: 2, title: "Ilkom Tilovov", icon: Icons.User },
      { id: 3, title: "Ilkom Tilovov", icon: Icons.User },
      { id: 4, title: "Ilkom Tilovov", icon: Icons.User },
      { id: 5, title: "Ilkom Tilovov", icon: Icons.User },
      { id: 6, title: "Ilkom Tilovov", icon: Icons.User },
      { id: 7, title: "Ilkom Tilovov", icon: Icons.User },
      { id: 8, title: "Ilkom Tilovov", icon: Icons.User },
    ],
  },
  {
    id: 4,
    title: "More From YouTube",
    data: [
      { id: 1, title: "YouTube Premium", icon: Icons.Pre },
      { id: 2, title: "Setting", icon: Icons.Set },
      { id: 3, title: "Help", icon: Icons.Help },
      { id: 4, title: "Repost issue", icon: Icons.Shop },
    ],
  },
];

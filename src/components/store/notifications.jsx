import Image from "../../assets/images/avatar-angela-gray.webp";
import Anna from "../../assets/images/avatar-anna-kim.webp";
import Gray from "../../assets/images/avatar-jacob-thompson.webp";
import Jacob from "../../assets/images/avatar-kimberly-smith.webp";
import Kim from "../../assets/images/avatar-mark-webber.webp";
import Webber from "../../assets/images/avatar-nathan-peterson.webp";
import Nathan from "../../assets/images/avatar-rizky-hasanuddin.webp";

export const followersArray = [
  {
    fullName: "John Doe",
    image: Image,
  },
  {
    fullName: "Jane Smith",
    image: Anna,
  },
  {
    fullName: "Alex Johnson",
    image: Gray,
  },
  {
    fullName: "Emily Davis",
    image: Jacob,
  },
];

export const reactionsArray = [
  {
    fullName: "John Doe",
    reactionDescription: "My first tournament",
    image: Kim,
  },
  {
    fullName: "Jane Smith",
    reactionDescription: "Chess Club",
    image: Webber,
  },
  {
    fullName: "Alex Johnson",
    reactionDescription: "Shared the post",
    image: Nathan,
  },
  {
    fullName: "Emily Davis",
    reactionDescription: "Reacted with a heart emoji",
    image: Image,
  },
  {
    fullName: "Michael Wilson",
    image: Anna,
    reactionDescription: "Expressed disagreement in the comments",
  },
];

export const privateMessageArray = [
  {
    fullName: "John Doe",
    image: Gray,
    message: "My first tournament today!",
  },
  {
    image: Jacob,
    fullName: "Jane Smith",
    message:
      "Hello thanks for setting up the Chess Club. I've been a member for a few weeks now and 'm alreadv having lots of fun and improving my game",
  },
  {
    fullName: "Alex Johnson",
    image: Kim,
    message: "Shared the post",
  },
];

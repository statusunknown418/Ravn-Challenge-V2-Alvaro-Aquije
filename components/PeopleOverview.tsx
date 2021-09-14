import { FC } from "react";
import Image from "next/image";
import { PeopleOverview } from "../interfaces/CommonInterfaces";
import Link from "next/link";

// * Using Types and Interfaces is useful for autocompletion and code error checking
// TODO Finish styling here

interface Props {
  peopleData: PeopleOverview;
}

export const InitialPeople: FC<Props> = ({ peopleData }) => {
  return (
    <Link href={"/"} passHref>
      <div className="flex items-center justify-between gap-4 m-2 border-b-2 p-2 group">
        <ul className="flex flex-col">
          <li className="text-lg">{peopleData.name}</li>
          <li className="text-sm text-light-text">
            {peopleData.species && peopleData.gender
              ? peopleData.species.name
              : "Human"}{" "}
            from {peopleData.homeworld.name}
          </li>
        </ul>
        <span>
          <Image width={15} height={15} src="/assets/VectorIcon.svg" />
        </span>
      </div>
    </Link>
  );
};

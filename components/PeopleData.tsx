import { FC, useContext } from "react";
import { IdContext } from "../context/IdContext";
import { PersonDetails } from "../interfaces/CommonInterfaces";
import styles from "../styles/peopleData.module.css";
// ? I split the validation and the details component just to make the file easier to read
type Props = {
  allPeopleDetails: PersonDetails[];
  error: Object;
  loading: boolean;
};

type SecondaryProps = {
  specificPerson: PersonDetails;
};
type SmallChunkProps = {
  detail: string;
  info: string;
};

/*
 * Small Component to encapsulate the details
 * and as always in the code follow the DRY approach
 */
const DetailChunk: FC<SmallChunkProps> = ({ detail, info }) => {
  return (
    <div className="common-flex">
      <li className="h2-low-emphasis">{info}</li>
      <li className="font-bold capitalize">{detail}</li>
    </div>
  );
};

//* This component won't be used anywhere else that's why it's not exported
const MainDetailsComponent: FC<SecondaryProps> = ({ specificPerson }) => {
  return (
    <div className="flex-col items-center justify-center space-y-3">
      <h2 className="text-lg font-semibold">General Information</h2>
      <div className="common-flex">
        <li className="h2-low-emphasis">Eye Color</li>
        <li
          className={`capitalize font-bold text-[${specificPerson.eyeColor}]`}
        >
          {specificPerson.eyeColor}
        </li>
      </div>
      <DetailChunk info={"Hair Color"} detail={specificPerson.hairColor} />
      <DetailChunk info={"Skin Color"} detail={specificPerson.skinColor} />
      <DetailChunk info={"Birth Year"} detail={specificPerson.birthYear} />

      <h2 className="text-lg font-semibold pt-3">Vehicles</h2>
      {specificPerson.vehicleConnection !== undefined &&
      specificPerson.vehicleConnection.vehicles.length > 0 ? (
        specificPerson.vehicleConnection.vehicles.map((v) => (
          <div key={v.id}>
            <DetailChunk info={v.name} detail={v.model} />
          </div>
        ))
      ) : (
        <h2 className="font-bold text-ravn-error-red">
          This character doesn&apos;t have any vehicles!
        </h2>
      )}
    </div>
  );
};

export const PeopleData: FC<Props> = ({ allPeopleDetails }) => {
  const { personId } = useContext(IdContext);

  /*
   * Since this filter will return a new array its first element needs to be selected
   * because here I only look for the specific person ID to be the same as what the
   * context provides
   */
  const specificCharacter = allPeopleDetails.filter((p) => p.id === personId);
  return (
    //* Validations
    <div className="px-5 md:px-10 py-5">
      {personId === null && (
        <h2
          className={`text-center text-xl font-bold text-light-text ${styles.clampedMargin}`}
        >
          Please select a character to view its details
        </h2>
      )}
      {personId !== null && (
        <MainDetailsComponent specificPerson={specificCharacter[0]} />
      )}
    </div>
  );
};

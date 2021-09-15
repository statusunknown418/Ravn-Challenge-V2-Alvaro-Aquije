import { FC } from "react";

type Props = {};

export const ErrorBanner: FC<Props> = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <h2 className="text-ravn-error-red font-bold">Failed to load data</h2>
    </div>
  );
};

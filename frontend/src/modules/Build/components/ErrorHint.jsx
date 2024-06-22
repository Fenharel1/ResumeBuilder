export const ErrorHint = ({ error }) => {
  return (
    <>
      {error && (
        <p className="text-red-500 font-medium text-md mt-2 mb-4">
          {" "}
          {error.message}{" "}
        </p>
      )}
    </>
  );
};

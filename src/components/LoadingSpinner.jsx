import BeatLoader from "react-spinners/BeatLoader";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center py-5">
      <BeatLoader size={20} color="#282877" />
    </div>
  );
};

export default LoadingSpinner;

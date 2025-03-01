'use client'
import { useForm } from "react-hook-form";

type FormData = {
  appName: string;
  appDescription: string;
};

type Props = {
  setActiveTab: (tab: string) => void;
};

export default function BasicConfig({ setActiveTab }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    setActiveTab("RAG");
  };

  return (
    <div className="p-6 w-full">
      <div className="bg-[#4a5d4f] text-white text-lg font-semibold px-4 py-2 rounded">
        Basic Configuration
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-200 p-4 mt-4 rounded shadow-sm"
      >
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Basic Information
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              App Name
            </label>
            <input
              type="text"
              placeholder="Enter App Name"
              {...register("appName", { required: "App Name is required" })}
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition"
            />
            {errors.appName && (
              <p className="text-red-500 text-sm mt-1">{errors.appName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              App Description
            </label>
            <textarea
              placeholder="Enter App Description"
              {...register("appDescription", { required: "App Description is required" })}
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none focus:border-black transition resize-none"
              rows={4}
            />
            {errors.appDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.appDescription.message}
              </p>
            )}
          </div>
        </div>
      </form>

      <div className="flex justify-between mt-8">
        <button
          className="bg-gray-300 px-8 py-2 rounded text-gray-500 font-medium cursor-not-allowed"
          disabled
        >
          Previous
        </button>

        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="bg-black text-white px-8 py-2 rounded hover:bg-gray-800 transition font-medium cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

import React from "react";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
const CampaignSupport = () => {
  const { handleSubmit, control } = useForm({});

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-5">Support</h2>
      <div className="bg-white w-full shadow-sdsecondary py-7 px-6 rounded-lg flex flex-col  gap-y-5">
        <p className="font-medium text-xl text-text3 text-center mb-2">
          Pledge without reward
        </p>
        <Input
          control={control}
          placeholder="$10"
          name="supportCampaign"
          className="text-lg font-medium py-2 px-5 border border-strock w-full rounded "
        ></Input>
        <div className="bg-graySoft p-5 rounded-xl mb-2">
          <p className="text-text2 font-semibold mb-5">
            Back it because you believe in it.
          </p>
          <p className="text-text3 font-normal">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button kind="secondary">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;

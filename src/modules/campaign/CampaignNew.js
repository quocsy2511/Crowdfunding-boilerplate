import axios from "axios";
import ImageUploader from "quill-image-uploader";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill"; //cái soạn thảo văn bản nè
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import { Dropdown } from "../../components/dropdown";
import Upload from "../../components/image/Upload";
import { Input, Textarea } from "../../components/input";
import { Label } from "../../components/label";
import { IMGBB_API, SEVER_ENDPOINT } from "../../config/config";
import useOnChange from "../../hooks/useOnChange";
Quill.register("modules/imageUploader", ImageUploader);

const categoriesData = ["Education", "architecture"];

const CampaignNew = () => {


  const [content, setContent] = useState("");
  const [countries, setCountries] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  //watch dùng để theo dõ giá trị khi nó thay đổi
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropDownLabel = (name, defaultValue = "") => {
    const valueLabel = watch(name) || defaultValue;
    return valueLabel;
  };
  const handNewCampaign = async (values) => {
    console.log("values  in new camp: ", values);
    try {
      await axios.post(SEVER_ENDPOINT + "campaigns", {
        ...values,
        content,
      });
      toast.success("Create successfully ");
      reset({});
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSelectCategory = (name, value) => {
    setValue(name, value);
  };
  const handleSelectOption = (name, value) => {
    setValue(name, value);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: IMGBB_API,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  const [filterCountry, setFilterCountry] = useOnChange(500);
  useEffect(() => {
    async function fetchCountries() {
      if (!filterCountry) return;
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${filterCountry}`
        );
        setCountries(res.data);
      } catch (error) {
        toast.error(error.message);
      }
    }

    fetchCountries();
  }, [filterCountry]);

  return (
    <div className="bg-white rounded-xl py-10 px-[66px] ">
      <div className="text-center">
        <h1 className="text-center py-4 px-[60px] bg-opacity-5 bg-text4 rounded-lg font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀{" "}
        </h1>
      </div>
      <form onSubmit={handleSubmit(handNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="title">Campaign Title *</Label>
            <Input
              control={control}
              name="tile"
              type="text"
              placeholder="Write a title"
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="title">Select a category *</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropDownLabel("category", "Select Category")}
              ></Dropdown.Select>
              <Dropdown.List>
                {categoriesData.map((item, index) => (
                  <Dropdown.Option
                    key={index}
                    onClick={() => handleSelectCategory("category", item)}
                  >
                    {item}
                  </Dropdown.Option>
                ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label htmlFor="short_description">Short Description *</Label>
          <Textarea
            control={control}
            name="short_description"
            placeholder="Write a short description...."
          ></Textarea>
        </FormGroup>
        {/* sử thằng imgbb để upload ảnh */}
        <FormGroup>
          <Label>Upload Image *</Label>
          <Upload onChange={setValue} name="featured_image"></Upload>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="story">Story *</Label>
          <ReactQuill
            placeholder="Write your story......"
            modules={modules}
            theme="snow"
            value={content}
            onChange={setContent}
          />
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label htmlFor="goal">Goal *</Label>
            <Input
              control={control}
              name="goal"
              type="text"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="raised_amount">Raised Amount *</Label>
            <Input
              control={control}
              name="raised_amount"
              type="text"
              placeholder="$0.00 USD"
            ></Input>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="amount_prefilled">Amount Prefilled</Label>
            <Input
              control={control}
              name="amount_prefilled"
              type="text"
              placeholder="Amount Prefilled"
            ></Input>
            <p className="font-normal text-sm text-text3 text-left">
              It will help fill amount box by click, place each amount by comma,
              ex: 10,20,30,40
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="video">Video</Label>
            <Input
              control={control}
              name="video"
              type="text"
              placeholder="Video"
            ></Input>
            <p className="font-normal text-sm text-text3 text-left">
              Place Youtube or Vimeo Video URL
            </p>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="method">Campaign End Method</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select one"></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Option>Start a Campaign 1 🚀 </Dropdown.Option>
                <Dropdown.Option>Start a Campaign 2 🚀 </Dropdown.Option>
                <Dropdown.Option>Start a Campaign 3 🚀 </Dropdown.Option>
                <Dropdown.Option>Start a Campaign 4 🚀 </Dropdown.Option>
                <Dropdown.Option>Start a Campaign 1 🚀 </Dropdown.Option>
                <Dropdown.Option>Start a Campaign 1 🚀 </Dropdown.Option>
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="country">Country</Label>
            <Dropdown>
              <Dropdown.Select
                placeholder={getDropDownLabel("country", "Select a country")}
              ></Dropdown.Select>
              <Dropdown.List>
                <Dropdown.Search
                  placeholder="Search Countries "
                  onChange={setFilterCountry}
                ></Dropdown.Search>
                {countries.length > 0 &&
                  countries.map((item, index) => (
                    <Dropdown.Option
                      key={index}
                      onClick={() =>
                        handleSelectOption("country", item.name.common)
                      }
                    >
                      {item.name.common}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label htmlFor="start_date">Start Date</Label>
            {/* <DatePicker onChange={onChange} value={value} /> */}
            <Input
              control={control}
              name="start_date"
              type="date"
              placeholder="Start Date"
              // value={startDate}
              // onChange={setStartDate}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="end_date">End Date</Label>
            <Input
              control={control}
              name="end_date"
              type="date"
              placeholder="End Date"
              // value={endDate}
              // onChange={setEndDate}
            ></Input>
          </FormGroup>
        </FormRow>
        <div className=" flex items-center justify-center mt-[53px]">
          <Button kind="primary" type="submit">
            {" "}
            Submit new campaign{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CampaignNew;

"use client";

import { useState } from "react";
import "./styles.css";

export type CreateFormProps = {
  submitFun: (data: any) => void;
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const [data, setData] = useState<{
    title: string;
    body: string;
    lang: string;
  }>({
    title: "",
    body: "",
    lang: "en",
  });
  const changeHandler = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async () => {
    if (data.title && data.body && data.lang) {
      await props.submitFun(data);
      setData({
        title: "",
        body: "",
        lang: "en",
      });
    }
  };

  return (
    <form id="createForm">
      <div id="createFormLabel">Create new</div>
      <div id="createFormBody">
        <div className="createFormItem">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="title"
            name="title"
            id="title"
            value={data.title}
            onChange={changeHandler}
          />
        </div>
        <div className="createFormItem">
          <label htmlFor="body">Body</label>
          <textarea
            placeholder="body"
            name="body"
            id="body"
            value={data.body}
            onChange={changeHandler}
          />
        </div>
        <div className="createFormItem">
          <label htmlFor="lang">Language</label>
          <select value={data.lang} name="lang" onChange={changeHandler}>
            <option value="en">en</option>
            <option value="uk">uk</option>
          </select>
        </div>
      </div>
      <button id="createSubmitButton" type="button" onClick={submit}>
        Create
      </button>
    </form>
  );
};

export default CreateForm;

import React, { useState } from "react";

const BettaQuality = () => {
  const [step, setStep] = useState(1); // จัดการขั้นตอนของฟอร์ม
  const [fishData, setFishData] = useState({
    fishName: "",
    fishAge: "",
    fishSize: "",
    fishType: "",
    finType: "",
    tailType: "",
    subTailType: "",
  });
  const [fileData, setFileData] = useState({
    images: [],
    video: null,
  });
  const [toastMessage, setToastMessage] = useState("");

  const tailOptions = {
    "ครีบสั้น": {
      "หางเดี่ยว": ["หางพัด", "หางโพธิ์", "หางมงกุฎ", "หางพระจันทร์ครึ่งดวง"],
      "หางคู่": ["หางพัด", "หางโพธิ์", "หางมงกุฎ", "หางพระจันทร์ครึ่งดวง"],
    },
    "ครีบยาว": {
      "หางเดี่ยว": ["หางพู่กัน", "หางมงกุฎ", "หางพระอาทิตย์ครึ่งดวง", "หางพระจันทร์ครึ่งดวง"],
      "หางคู่": ["หางพู่กัน", "หางมงกุฎ", "หางพระอาทิตย์ครึ่งดวง", "หางพระจันทร์ครึ่งดวง"],
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFishData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "fishType" && { finType: "", tailType: "", subTailType: "" }),
      ...(name === "finType" && { tailType: "", subTailType: "" }),
      ...(name === "tailType" && { subTailType: "" }),
    }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    if (name === "images") {
      setFileData((prev) => ({ ...prev, images: Array.from(files).slice(0, 3) }));
    } else if (name === "video") {
      setFileData((prev) => ({ ...prev, video: files[0] }));
    }
  };

  const resetFiles = () => {
    setFileData({ images: [], video: null });
    setToastMessage("ไฟล์ถูกล้างแล้ว");
  };

  const nextStep = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const submitForm = () => {
    alert("ข้อมูลถูกส่งเรียบร้อยแล้ว!");
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">อัปโหลดไฟล์</h2>
            <label className="block mb-2">รูปภาพ (3 รูป)</label>
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              className="block w-full mb-4"
              onChange={handleFileUpload}
            />
            <label className="block mb-2">วิดีโอ (1 วิดีโอ)</label>
            <input
              type="file"
              name="video"
              accept="video/*"
              className="block w-full mb-4"
              onChange={handleFileUpload}
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={resetFiles}
            >
              ล้างไฟล์
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">กรอกรายละเอียดปลากัด</h2>
            <label className="block mb-2">ชื่อปลากัด</label>
            <input
              type="text"
              name="fishName"
              value={fishData.fishName}
              onChange={handleChange}
              className="block w-full mb-4 border border-gray-300 rounded p-2"
            />
            <label className="block mb-2">อายุ (เดือน)</label>
            <input
              type="number"
              name="fishAge"
              value={fishData.fishAge}
              onChange={handleChange}
              className="block w-full mb-4 border border-gray-300 rounded p-2"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-lg font-semibold mb-4">ยืนยันข้อมูล</h2>
            <pre className="bg-gray-100 p-4 rounded mb-4">
              {JSON.stringify({ ...fishData, ...fileData }, null, 2)}
            </pre>
            <button
              onClick={submitForm}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              ยืนยัน
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex justify-between items-center">
        <button
          disabled={step === 1}
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          ย้อนกลับ
        </button>
        <span>ขั้นตอน {step} / 3</span>
        <button
          disabled={step === 3}
          onClick={nextStep}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          ถัดไป
        </button>
      </div>
      <div>{renderStepContent()}</div>
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default BettaQuality;

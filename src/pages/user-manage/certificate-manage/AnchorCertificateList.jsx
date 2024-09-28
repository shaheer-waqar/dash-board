import React, { useState } from "react";
import CustomTable from "../../../component/CustomTable";

function AnchorCertificateList() {
  const columns = [
    {
      field: "id",
      headerName: "Clear Conditions",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "anchornickname",
      headerName: "Anchor Nickname",
      width: 120,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "certificationname",
      headerName: "Certification Name ",
      width: 90,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 120,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <div className="flex items-center justify-center">
          <img
            src={params.value}
            className={`w-[50px] ${!params.value && "border h-10"}`}
            alt=""
          />
        </div>
      ),
    },
    {
      field: "fans",
      headerName: "Fans",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "coin",
      headerName: "Coin",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "level",
      headerName: "Level",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "operations",
      headerName: "Operations",
      width: 140,
      headerAlign: "center",
      resizable: false,
      sortable: false,
      filterable: false,
      hidetable: false,
      renderCell: (params) => (
        <div
          className="w-full flex justify-center "
          onClick={(e) => e.stopPropagation()}
        >
          <span
            onClick={() => previewHandler(params.id)}
            className="bg-blue-100 border-blue-300 border-2 rounded-[3px]  px-4 py-1 cursor-pointer"
          >
            Review
          </span>
        </div>
      ),
    },
  ];
  const [rowData, setRowData] = useState([
    {
      id: "166968",
      anchornickname: "VICKEY",
      certificationname: "",
      avatar: "",
      fans: "0",
      coin: "21014415.00",
      level: "Lv100",
      type: "Ordinary member",
      status: "Certification",
    },
    {
      id: "166863",
      anchornickname: "Daniel",
      certificationname: "",
      avatar: "",
      fans: "0",
      coin: "6175003.00",
      level: "Lv100",
      type: "Ordinary member",
      status: "Certification",
    },
    {
      id: "166864",
      anchornickname: "SSF KING AGENCY",
      certificationname: "Official certification",
      avatar: "",
      fans: "0",
      coin: "99999999999.99",
      level: "Lv80",
      type: "Ordinary member",
      status: "Certification",
    },
    {
      id: "166725",
      anchornickname: "Bogo166725",
      certificationname: "",
      avatar: "",
      fans: "1",
      coin: "1007532.00",
      level: "Lv70",
      type: "Ordinary member",
      status: "Certification",
    },
  ]);

  let [openForm, setOpenForm] = useState(false);
  const [review, setReview] = useState([]);

  const fileHandler = (e) => {
    const avatlink = e.target.files[0];
    const url = URL.createObjectURL(avatlink);
    setFormData({ ...formData, coverimg: url });
    console.log(formData);
  };
  const previewHandler = (id) => {
    const revieItem = rowData.filter((prev) => prev.id === id);
    setReview(revieItem);
    setOpenForm(true);
  };
  return (
    <div>
      <button
        className="text-white px-3 py-1 bg-blue-500 mb-3"
        onClick={() => setOpenForm(true)}
      >
        {" "}
        + Add
      </button>
      <CustomTable columns={columns} rows={rowData} />
      <div
        onClick={() => setOpenForm(false)}
        className={`fixed  top-0 left-0 z-[999] w-full h-screen bg-[#00000049] block ${
          !openForm && "hidden"
        }`}
      ></div>
      <div
        className={`w-full max-w-[800px] absolute right-[50%] -translate-x-[-50%] bg-white z-[1000]  ${
          openForm ? "top-10 transition-all duration-300 " : "top-[-1000px]"
        } `}
      >
        <h1 className="px-5 py-3">Review</h1>
        <div>
          {review.map((e, i) => {
            return (
              <div key={i} className="px-4 py-8 flex flex-col gap-4">
                <div className="w-full flex gap-2">
                  <h1 className="w-3/12 text-right font-semibold">Number</h1>
                  <p>{e.id}</p>
                </div>
                <div className="w-full flex gap-2">
                  <h1 className="w-3/12 text-right font-semibold">User nickename</h1>
                  <p>{e.anchornickname}</p>
                </div>
                <div className="w-full flex gap-2">
                  <h1 className="w-3/12 text-right font-semibold">Coin</h1>
                  <p>{e.coin}</p>
                </div>
                <div className="w-full flex gap-2">
                  <h1 className="w-3/12 text-right font-semibold">Type</h1>
                  <p>{e.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AnchorCertificateList;

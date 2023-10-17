import React from "react";
import { db } from "../../db";

export default function Role({ role, hidden, buttonType, addRole,imgHeight,imgWidth,textStyle,showPlayerName}) {
  async function deleteRole(role) {
    db.currentGame.delete(role.id);
  }
  return (
    <div
      className="text-white col-span-4 sm:col-span-3 flex flex-col gap-1 justify-center items-center relative"
      key={role.id}
    >
      <img
        src={ hidden ? "images/hidden.jpg" : "images/roles/" + role.image}
        className={`w-[${imgWidth ? imgWidth+'px' : '100%' }] h-[${imgHeight ? imgHeight+'px' : '100%' }] rounded`}
      />
            <div className="font-bold">{role.player && showPlayerName ? role.player : ""}</div>
      <div className={`font-bold ${textStyle}`} >{hidden ? "?????????????" : role.name}</div>
      {buttonType == "delete" ? (
        <button
          className="text-xl absolute top-0 right-0 bg-red-500 rounded-full w-7 h-7 text-center"
          onClick={() => deleteRole(role)}
        >
          X
        </button>
      ) : buttonType == "add" ? (
        <button
          className="text-xl absolute top-0 right-0 bg-blue-500 rounded-full w-7 h-7 text-center"
          onClick={addRole}
        >
          +
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

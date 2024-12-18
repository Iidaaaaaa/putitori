import React, { useState } from "react";
// Componentsのインポート
import PlanForm from "@components/PlanForm";
import Getgpsbtn from "@components/Getgpsbtn";
import SearchPlan from "@components/SearchPlan";
import SelectGenre from "@components/SelectGenre";

// 画像のインポート
import Clock from "@assets/Clock";
import Genre from "@assets/Genre";
import User from "@assets/User";
import Pin from "@assets/Pin";

const FormPage = () => {
  return (
    <div className="max-w-xs mx-auto">
      <h1 className="text-lg font-medium">プランを探す</h1>
      <div>
        <PlanForm
          text="空き時間"
          Icon={<Clock color="#000" width="18" height="18" />}
        />
        <PlanForm
          text="ジャンル"
          Icon={<Genre color="#000" width="18" height="18" />}
        />
        <PlanForm
          text="移動手段"
          Icon={<User color="#000" width="18" height="18" />}
          Accordion={<SelectGenre />}
        />
        <PlanForm
          text="現在地"
          Icon={<Pin color="#000" width="18" height="18" />}
          Vector={<Getgpsbtn />}
          padding={"px-5 py-3"}
          disableAccordion
        />
      </div>
      <SearchPlan />
    </div>
  );
};

export default FormPage;

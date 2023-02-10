import React from "react";

import {Top} from "@/components/top/Top";
import {Menu} from "@/components/menu/Menu";

import "./page.module.css";

export default function DashboardPage() {
    return (
        <>
            <Top>
                <Menu/>
            </Top>
        </>
    );
}
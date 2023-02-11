import React from "react";

import { Top } from "@/components/top/Top";
import { Menu } from "@/components/menu/Menu";
import { BreadcrumbItem, Breadcrumbs } from "@/components/breadcrumbs/Breadcrumbs";

import { Title } from "@/components/title/Title";
import { Navigation, NavigationItem } from "@/components/navigation/Navigation";
import { Card } from "@/components/card/Card";
import { CardAction } from "@/components/cardAction/CardAction";

const breadcrumbs: BreadcrumbItem[] = [
    {
        label: "Dashboard",
        active: false,
    },
    {
        label: "Overview",
        active: true,
    },
];

const navigationItems: NavigationItem[] = [
    {
        label: "Overview",
        active: true,
    },
    {
        label: "Transaction",
        active: false,
    },
];

export default function DashboardPage() {
    return (
        <>
            <Top>
                <Menu/>

                <div>
                    <Title label={"Welcome back, Rainer Yaeger 👏🏻"}/>
                    <Breadcrumbs items={breadcrumbs}/>
                </div>

                <div>
                    <Navigation items={navigationItems}/>
                </div>
            </Top>

            <Card title={"Total balance"} action={<CardAction/>}/>
        </>
    );
}
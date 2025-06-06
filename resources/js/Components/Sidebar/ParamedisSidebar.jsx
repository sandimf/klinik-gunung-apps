import React, { useState } from "react";
import {
    Command,
    Activity,
    Home,
    Settings2,
    Users,
    ChevronRight,
    History,
} from "lucide-react";
import { NavUser } from "@/Components/Nav/NavUser";
import { TeamSwitcher } from "@/Components/Nav/TeamSwitcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/Components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";

export function AppSidebar({ ...sidebarProps }) {
    const { url, props } = usePage();
    const auth = props.auth;

    const isRouteActive = (routeUrl) => {
        return url.startsWith(routeUrl);
    };

    const data = {
        user: auth.user,
        teams: [
            {
                name: "Klinik Gunung",
                logo: Command,
                plan: "Enterprise",
            },
        ],
        navMain: [
            {
                title: "Dashboard",
                url: route("paramedis.dashboard"),
                icon: Home,
            },
            {
                title: "Aktifitas Pelayanan",
                url: route("dashboard"),
                icon: Users,
                items: [
                    {
                        title: "Screening",
                        url: route("paramedis.screening"),
                    },
                    {
                        title: "Screening Online",
                        url: route("screening-online.paramedis"),
                    },
                ],
            },
            {
                title: "Aktivitas",
                url: route("dashboard"),
                icon: Activity,
                items: [
                    {
                        title: "Aktivitas Saya",
                        url: route("report.index"),
                    },
                    {
                        title: "Aktivitas Semua Pemeriksaan",
                        url: route("activity.healthcheck"),
                    },
                ],
            },
            {
                title: "Riwayat Pemeriksaan",
                url: route("paramedis.history"),
                icon: History,
            },

            {
                title: "Settings",
                url: route("paramedis.profile"),
                icon: Settings2,
            },
        ],
    };

    const [openItems, setOpenItems] = useState([]);

    const toggleItem = (title) => {
        setOpenItems((prev) =>
            prev.includes(title)
                ? prev.filter((item) => item !== title)
                : [...prev, title]
        );
    };

    return (
        <Sidebar collapsible="icon" {...sidebarProps}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <Collapsible
                                    open={openItems.includes(item.title)}
                                    onOpenChange={() => toggleItem(item.title)}
                                    asChild
                                    className="group/collapsible"
                                >
                                    <div>
                                        <CollapsibleTrigger asChild>
                                            {item.items ? (
                                                <SidebarMenuButton
                                                    tooltip={item.title}
                                                    isActive={isRouteActive(
                                                        item.url
                                                    )}
                                                >
                                                    {item.icon && (
                                                        <item.icon className="size-4" />
                                                    )}
                                                    <span>{item.title}</span>
                                                    <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                </SidebarMenuButton>
                                            ) : (
                                                <Link href={item.url}>
                                                    <SidebarMenuButton
                                                        tooltip={item.title}
                                                        isActive={isRouteActive(
                                                            item.url
                                                        )}
                                                    >
                                                        {item.icon && (
                                                            <item.icon className="size-4" />
                                                        )}
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </SidebarMenuButton>
                                                </Link>
                                            )}
                                        </CollapsibleTrigger>
                                        {item.items && (
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {item.items.map(
                                                        (subItem) => (
                                                            <SidebarMenuSubItem
                                                                key={
                                                                    subItem.title
                                                                }
                                                            >
                                                                <Link
                                                                    href={
                                                                        subItem.url
                                                                    }
                                                                >
                                                                    <SidebarMenuSubButton
                                                                        isActive={isRouteActive(
                                                                            subItem.url
                                                                        )}
                                                                    >
                                                                        <span>
                                                                            {
                                                                                subItem.title
                                                                            }
                                                                        </span>
                                                                    </SidebarMenuSubButton>
                                                                </Link>
                                                            </SidebarMenuSubItem>
                                                        )
                                                    )}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        )}
                                    </div>
                                </Collapsible>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}

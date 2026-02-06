"use client";
import React from "react";
import Link from "next/link";
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    ArrowRight,
    PlusCircle,
    TrendingUp,
    MessageSquare,
    Globe
} from "lucide-react";

const AdminDashboard = () => {
    const stats = [
        { label: "Total Articles", value: "12", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
        { label: "Active Users", value: "1.2k", icon: Users, color: "text-purple-500", bg: "bg-purple-50" },
        { label: "Comments", value: "48", icon: MessageSquare, color: "text-orange-500", bg: "bg-orange-50" },
        { label: "Global Reach", value: "24", icon: Globe, color: "text-green-500", bg: "bg-green-50" },
    ];

    const quickActions = [
        {
            title: "Article Manager",
            description: "Manage and create new blog posts",
            href: "/admin/articles",
            icon: FileText,
            color: "bg-[#ef662e]"
        },
        {
            title: "Engagement",
            description: "View comments and user feedback",
            href: "#",
            icon: MessageSquare,
            color: "bg-black"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 pt-28 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mb-2">
                            Dashboard
                        </h1>
                        <p className="text-gray-500 font-medium">Welcome back, Admin. Here's what's happening today.</p>
                    </div>
                    <Link
                        href="/admin/articles"
                        className="inline-flex items-center gap-2 bg-[#ef662e] text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-black transition-all shadow-lg shadow-[#ef662e]/20"
                    >
                        <PlusCircle className="w-4 h-4" />
                        New Article
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
                            <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-black text-gray-900 tracking-tighter">{stat.value}</h3>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Quick Actions */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {quickActions.map((action, i) => (
                                <Link
                                    key={i}
                                    href={action.href}
                                    className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
                                >
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${action.color} opacity-[0.03] rounded-bl-full transition-all group-hover:scale-110`} />
                                    <div className={`${action.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6`}>
                                        <action.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-2">{action.title}</h3>
                                    <p className="text-gray-500 text-sm font-medium mb-6">{action.description}</p>
                                    <div className="flex items-center gap-2 text-[#ef662e] font-black uppercase text-[10px] tracking-widest">
                                        Launch Module <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity / Side Panel */}
                    <div className="lg:col-span-1">
                        <div className="bg-black text-white p-8 rounded-[2.5rem] h-full shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-[#ef662e] opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                            <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 relative z-10 flex items-center gap-2">
                                <TrendingUp className="w-6 h-6" />
                                Status
                            </h2>
                            <div className="space-y-6 relative z-10">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Systems</p>
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold">API Backend</span>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs text-green-500">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Journal Performance</p>
                                    <div className="space-y-3">
                                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-2/3 h-full bg-[#ef662e]" />
                                        </div>
                                        <p className="text-xs text-gray-400">Traffic up <span className="text-green-500 font-bold">12%</span> this week</p>
                                    </div>
                                </div>
                                <Link
                                    href="/articles"
                                    target="_blank"
                                    className="flex items-center justify-between p-4 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#ef662e] hover:text-white transition-all mt-10"
                                >
                                    View Live Site
                                    <Globe className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

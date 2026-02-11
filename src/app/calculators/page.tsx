'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import { Info, RefreshCw } from "lucide-react";

// Types for calculation results
interface BmiResult {
    bmi: number;
    status: string;
    color: string;
}

interface BmrResult {
    bmr: number;
    activityLevels: { [key: string]: number };
}

interface HeartRateResult {
    maxHR: number;
    zones: {
        name: string;
        range: string;
        description: string;
        color: string;
        bg: string;
    }[];
}

const CalculatorContent = () => {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState('bmi');

    // Form States
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [neck, setNeck] = useState('');
    const [waist, setWaist] = useState('');
    const [hip, setHip] = useState('');

    // Result States
    const [bmiResult, setBmiResult] = useState<BmiResult | null>(null);
    const [bmrResult, setBmrResult] = useState<BmrResult | null>(null);
    const [bodyFatResult, setBodyFatResult] = useState<number | null>(null);
    const [heartRateResult, setHeartRateResult] = useState<HeartRateResult | null>(null);

    const tabs = [
        { id: 'bmi', label: 'BMI Calculator', icon: "/calcy/3.png" },
        { id: 'bmr', label: 'BMR Calculator', icon: "/calcy/1.png" },
        { id: 'bodyfat', label: 'Body Fat Calculator', icon: "/calcy/2.png" },
        { id: "heartrate", label: "Heart Rate Calculator", icon: "/calcy/4.png" }
    ];

    useEffect(() => {
        const type = searchParams.get('type');
        if (type && ['bmi', 'bmr', 'bodyfat', 'heartrate'].includes(type)) {
            setActiveTab(type);
        }
    }, [searchParams]);

    const calculateBMI = () => {
        if (!height || !weight) return;
        const h = parseFloat(height) / 100;
        const w = parseFloat(weight);
        const bmi = parseFloat((w / (h * h)).toFixed(1));

        let status = '';
        let color = '';
        if (bmi < 18.5) { status = 'Underweight'; color = 'text-blue-500'; }
        else if (bmi < 25) { status = 'Normal'; color = 'text-green-500'; }
        else if (bmi < 30) { status = 'Overweight'; color = 'text-orange-500'; }
        else { status = 'Obese'; color = 'text-red-500'; }

        setBmiResult({ bmi, status, color });
    };

    const calculateBMR = () => {
        if (!height || !weight || !age) return;
        const h = parseFloat(height);
        const w = parseFloat(weight);
        const a = parseFloat(age);

        let bmr = 0;
        if (gender === 'male') {
            bmr = 88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a);
        } else {
            bmr = 447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a);
        }

        const activities = {
            "Sedentary (little or no exercise)": Math.round(bmr * 1.2),
            "Lightly active (exercise 1-3 days/week)": Math.round(bmr * 1.375),
            "Moderately active (exercise 3-5 days/week)": Math.round(bmr * 1.55),
            "Very active (exercise 6-7 days/week)": Math.round(bmr * 1.725),
            "Extra active (hard exercise & physical job)": Math.round(bmr * 1.9)
        };

        setBmrResult({ bmr: Math.round(bmr), activityLevels: activities });
    };

    const calculateBodyFat = () => {
        if (!waist || !neck || !height) return;
        const w = parseFloat(waist);
        const n = parseFloat(neck);
        const h = parseFloat(height);

        let fat = 0;
        if (gender === 'male') {
            fat = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
        } else {
            if (!hip) return;
            const hi = parseFloat(hip);
            fat = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
        }
        setBodyFatResult(parseFloat(fat.toFixed(1)));
    };

    const calculateHeartRate = () => {
        if (!age) return;
        const a = parseFloat(age);
        const maxHR = 220 - a;

        const zones = [
            { name: "Zone 1: Warm Up", range: `${Math.round(maxHR * 0.5)} - ${Math.round(maxHR * 0.6)} bpm`, description: "50-60% of Max. Improves health and recovery.", color: "text-emerald-500", bg: "bg-emerald-50" },
            { name: "Zone 2: Fat Burn", range: `${Math.round(maxHR * 0.6)} - ${Math.round(maxHR * 0.7)} bpm`, description: "60-70% of Max. Improves basic endurance and fat burning.", color: "text-yellow-500", bg: "bg-yellow-50" },
            { name: "Zone 3: Cardio", range: `${Math.round(maxHR * 0.7)} - ${Math.round(maxHR * 0.8)} bpm`, description: "70-80% of Max. Improves aerobic capacity and heart health.", color: "text-orange-500", bg: "bg-orange-50" },
            { name: "Zone 4: Hardcore", range: `${Math.round(maxHR * 0.8)} - ${Math.round(maxHR * 0.9)} bpm`, description: "80-90% of Max. Increases maximum performance capacity.", color: "text-rose-500", bg: "bg-rose-50" },
            { name: "Zone 5: Maximum", range: `${Math.round(maxHR * 0.9)} - ${maxHR} bpm`, description: "90-100% of Max. Helps fit athletes develop speed.", color: "text-red-500", bg: "bg-red-50" }
        ];

        setHeartRateResult({ maxHR, zones });
    };

    const reset = () => {
        setHeight(''); setWeight(''); setAge(''); setNeck(''); setWaist(''); setHip('');
        setBmiResult(null); setBmrResult(null); setBodyFatResult(null); setHeartRateResult(null);
    };



    return (
        <section className="py-12 md:py-20 bg-white min-h-screen md:pt-20 pt-30">
            <div className="container mx-auto px-4 md:px-6">
                {/* Heading Section - Matches ExploreProduct */}
                <div className="text-center mb-10 md:mb-12 mt-4 md:mt-10 2xl:mt-20">
                    <h2 className="text-3xl md:text-[3.5rem] font-bold text-gray-500 hover:text-[#ea9237] leading-tight mb-4 transition-colors">
                        Empower Your Health With <br className="hidden md:block" /> Our Professional Tools
                    </h2>
                    <p className="max-w-7xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed">
                        At Rbiomeds, we believe that understanding your metrics is the first step toward lasting wellness.
                        Our calculators are designed with precision and clinical accuracy to provide you with insights into
                        your body's composition, metabolism, and health status.
                    </p>
                </div>

                {/* Tab Navigation - Matches ExploreProduct */}
                <div className="mb-10 md:mb-16">
                    {/* Desktop View */}
                    <div className="hidden md:flex justify-center overflow-x-auto no-scrollbar">
                        <div className="inline-flex bg-gray-100 rounded-full p-1 border border-gray-200 whitespace-nowrap mx-auto">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => { setActiveTab(tab.id); reset(); }}
                                    className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-white text-[#ea9237] shadow-md border border-[#ea9237]/10'
                                        : 'text-gray-600 hover:bg-white/50 hover:text-[#ea9237]'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile View - 2x2 Grid with Icons */}
                    <div className="md:hidden grid grid-cols-2 gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => { setActiveTab(tab.id); reset(); }}
                                className={`flex flex-col items-center gap-3 p-5 rounded-[2rem] transition-all duration-300 border-2 ${activeTab === tab.id
                                    ? 'bg-white border-[#ea9237]/20 shadow-xl shadow-[#ea9237]/5 scale-[1.02]'
                                    : 'bg-gray-50/50 border-transparent text-gray-500 hover:bg-gray-100'
                                    }`}
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-2 transition-transform duration-500 ${activeTab === tab.id ? 'bg-[#ea9237]/10 rotate-3' : 'bg-white shadow-sm'}`}>
                                    <Image src={tab.icon} alt={tab.label} width={40} height={40} className="object-contain" />
                                </div>
                                <span className={`text-[10px] font-bold text-center leading-tight tracking-widest uppercase ${activeTab === tab.id ? 'text-[#ea9237]' : ''}`}>
                                    {tab.label.replace(' Calculator', '')}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gray-50 rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-12 border border-gray-100 shadow-sm transition-all duration-500">

                        {/* Form Title & Reset */}
                        <div className="mb-8 md:mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-[#ea9237] uppercase leading-tight">
                                    {tabs.find(t => t.id === activeTab)?.label}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium">Please enter your accurate measurements below.</p>
                            </div>
                            <button onClick={reset} className="p-3 text-gray-400 hover:text-[#ea9237] transition-all rounded-full bg-white shadow-sm self-end sm:self-auto">
                                <RefreshCw className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Input Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Gender</label>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setGender('male')}
                                        className={`flex-1 py-4 rounded-full font-bold transition-all border-2 ${gender === 'male' ? 'bg-[#ea9237] text-white border-[#ea9237] shadow-md' : 'bg-white text-gray-500 border-gray-100 hover:border-[#ea9237]/30'}`}
                                    >Male</button>
                                    <button
                                        onClick={() => setGender('female')}
                                        className={`flex-1 py-4 rounded-full font-bold transition-all border-2 ${gender === 'female' ? 'bg-[#ea9237] text-white border-[#ea9237] shadow-md' : 'bg-white text-gray-500 border-gray-100 hover:border-[#ea9237]/30'}`}
                                    >Female</button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Age</label>
                                <input
                                    type="number"
                                    placeholder="Years"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    className="w-full p-4 bg-white text-black rounded-2xl border-2 border-transparent focus:border-[#ea9237] transition-all font-bold outline-none shadow-sm"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Height (cm)</label>
                                <input
                                    type="number"
                                    placeholder="175"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    className="w-full p-4 bg-white text-black rounded-2xl border-2 border-transparent focus:border-[#ea9237] transition-all font-bold outline-none shadow-sm"
                                />
                            </div>

                            <div className="space-y-4">
                                <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Weight (kg)</label>
                                <input
                                    type="number"
                                    placeholder="70"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full p-4 bg-white text-black rounded-2xl border-2 border-transparent focus:border-[#ea9237] transition-all font-bold outline-none shadow-sm"
                                />
                            </div>

                            {activeTab === 'bodyfat' && (
                                <>
                                    <div className="space-y-4">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Neck (cm)</label>
                                        <input
                                            type="number"
                                            value={neck}
                                            onChange={(e) => setNeck(e.target.value)}
                                            className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ea9237] transition-all font-bold outline-none shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Waist (cm)</label>
                                        <input
                                            type="number"
                                            value={waist}
                                            onChange={(e) => setWaist(e.target.value)}
                                            className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ea9237] transition-all font-bold outline-none shadow-sm"
                                        />
                                    </div>
                                    {gender === 'female' && (
                                        <div className="space-y-4">
                                            <label className="block text-xs font-bold uppercase tracking-widest text-[#1e293b]">Hip (cm)</label>
                                            <input
                                                type="number"
                                                value={hip}
                                                onChange={(e) => setHip(e.target.value)}
                                                className="w-full p-4 bg-white rounded-2xl border-2 border-transparent focus:border-[#ea9237] transition-all font-bold outline-none shadow-sm"
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        <button
                            onClick={
                                activeTab === 'bmi' ? calculateBMI :
                                    activeTab === 'bmr' ? calculateBMR :
                                        activeTab === 'bodyfat' ? calculateBodyFat :
                                            calculateHeartRate
                            }
                            className="w-full py-5 bg-[#ea9237] text-white font-bold uppercase text-lg rounded-full shadow-lg hover:shadow-orange-200 transition-all transform hover:-translate-y-1 active:translate-y-0"
                        >
                            Calculate Your Results
                        </button>

                        {/* Result Section */}
                        <div className="mt-12">
                            {bmiResult && activeTab === 'bmi' && (
                                <div className="bg-white border-2 border-blue-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-sm animate-in fade-in slide-in-from-bottom-5">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                                        <div>
                                            <p className="text-[#ea9237] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Calculation Successful</p>
                                            <h4 className="text-5xl md:text-6xl font-black text-[#1e293b] tracking-tighter">
                                                {bmiResult.bmi} <span className="text-lg md:text-xl font-medium text-gray-400 uppercase">BMI</span>
                                            </h4>
                                        </div>
                                        <div className="md:text-right">
                                            <p className={`text-xl md:text-2xl font-bold uppercase ${bmiResult.color}`}>
                                                {bmiResult.status}
                                            </p>
                                            <p className="text-gray-400 text-xs md:text-sm">Target Healthy Range: 18.5 - 24.9</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {bmrResult && activeTab === 'bmr' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
                                    <div className="bg-white border-2 border-[#ea9237]/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-center shadow-sm">
                                        <p className="text-[#ea9237] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Basal Metabolic Rate</p>
                                        <h4 className="text-4xl md:text-5xl font-black text-[#1e293b] tracking-tighter">
                                            {bmrResult.bmr} <span className="text-lg md:text-xl font-medium text-gray-400 uppercase">kcal/day</span>
                                        </h4>
                                    </div>
                                    <div className="bg-gray-50/50 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 border border-gray-100">
                                        <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1e293b] mb-6">Activity Level Breakdown</p>
                                        <div className="space-y-3">
                                            {Object.entries(bmrResult.activityLevels).map(([level, val]) => (
                                                <div key={level} className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white rounded-2xl shadow-sm border border-gray-50 gap-2 text-center sm:text-left">
                                                    <span className="text-xs md:text-sm font-bold text-gray-700">{level}</span>
                                                    <span className="font-black text-[#ea9237] whitespace-nowrap">{val} kcal</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {bodyFatResult !== null && activeTab === 'bodyfat' && (
                                <div className="bg-white border-2 border-green-50 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 text-center shadow-sm animate-in fade-in slide-in-from-bottom-5">
                                    <p className="text-[#ea9237] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Analysis Result</p>
                                    <h4 className="text-6xl md:text-7xl font-black text-[#1e293b] tracking-tighter">
                                        {bodyFatResult}%
                                    </h4>
                                    <p className="mt-4 text-green-600 font-bold uppercase text-[10px] md:text-xs tracking-widest">Calculated Healthy Composition</p>
                                </div>
                            )}

                            {heartRateResult && activeTab === 'heartrate' && (
                                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-5">
                                    <div className="bg-white border-2 border-[#ea9237]/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 text-center shadow-sm">
                                        <p className="text-[#ea9237] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Estimated Max Heart Rate</p>
                                        <h4 className="text-4xl md:text-5xl font-black text-[#1e293b] tracking-tighter">
                                            {heartRateResult.maxHR} <span className="text-lg md:text-xl font-medium text-gray-400 uppercase">bpm</span>
                                        </h4>
                                    </div>
                                    <div className="bg-gray-50/50 rounded-[2.5rem] md:rounded-[3.5rem] p-4 md:p-6 border border-gray-100">
                                        <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1e293b] mb-6">Target Training Zones</p>
                                        <div className="space-y-4">
                                            {heartRateResult.zones.map((zone) => (
                                                <div key={zone.name} className={`${zone.bg} p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-black/5 transition-transform hover:scale-[1.02] duration-300`}>
                                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                                                        <h5 className={`text-base md:text-lg font-black ${zone.color}`}>{zone.name}</h5>
                                                        <span className="font-black text-gray-900 bg-white px-4 py-1 rounded-full text-[10px] md:text-sm shadow-sm whitespace-nowrap">{zone.range}</span>
                                                    </div>
                                                    <p className="text-gray-600 text-xs md:text-sm font-medium">{zone.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

const CalculatorPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Calculators...</div>}>
            <CalculatorContent />
        </Suspense>
    );
};

export default CalculatorPage;

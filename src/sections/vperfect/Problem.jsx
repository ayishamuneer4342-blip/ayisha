import React from 'react';
import { AlertTriangle, Clock, MousePointerClick } from 'lucide-react';

export default function Problem() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Your Current Website Is Costing You Money
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Most business websites are digital brochures collecting dust. They look okay, but they don't convert.
                        Every day without a high-performing website is another day your competitors are winning customers that should be yours.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                            <MousePointerClick className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">No Conversions</h3>
                        <p className="text-slate-600">
                            Visitors browse but don't buy or contact you. Your site fails to guide them to take action.
                        </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                            <Clock className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Too Slow</h3>
                        <p className="text-slate-600">
                            Slow load times frustrate users. If it takes more than 3 seconds, they're gone.
                        </p>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                            <AlertTriangle className="w-6 h-6 text-slate-700" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Confusing UX</h3>
                        <p className="text-slate-600">
                            Navigation is unclear. Information is hard to find. Users leave because they can't find what they need.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

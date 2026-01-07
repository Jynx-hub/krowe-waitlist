export default function Why() {
    return (
        <>
            <section className="bg-white py-24" id="comparison">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-text-main">Why Krowe?</h2>
                        <p className="mt-4 text-gray-600">Stop burning cash on consultants or hours on Google.</p>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-4 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">Feature</th>
                                    <th className="px-3 py-4 text-center text-sm font-medium text-gray-500" scope="col">ChatGpt</th>
                                    <th className="px-3 py-4 text-center text-sm font-medium text-gray-500" scope="col">Consultants</th>
                                    <th className="px-3 py-4 text-center text-sm font-bold text-primary bg-primary/5" scope="col">Krowe</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Cost</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">$20/month</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">$200+/hour</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-bold text-gray-900 bg-primary/5">$35/year (tbd)</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Tailored Advice</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500"><span className="material-symbols-outlined text-green-500">check</span></td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-bold text-gray-900 bg-primary/5"><span className="material-symbols-outlined text-primary">check_circle</span></td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Availability</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">Always</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">9-5 M-F</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-bold text-gray-900 bg-primary/5">24/7 (AI-Powered)</td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Structure</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500"><span className="material-symbols-outlined text-red-400">close</span></td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">Varies</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-center text-sm font-bold text-gray-900 bg-primary/5"><span className="material-symbols-outlined text-primary">check_circle</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

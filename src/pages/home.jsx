const Home = () => {
    return <>
    <div className="flex flex-col gap-4 bg-[#f5f7fa]">
        <div className="flex flex-col gap-2">
            <div className="font-bold text-3xl">AI Security & Governance Dashboard</div>
            <div className="text-gray-600 text-xl">Monitor and Manage your AI assets and compliance</div>
        </div>
        <div className="flex flex-row gap-3">
            <div className="flex flex-2/3 border-1 rounded-xl transform hover:-translate-y-1 hover:shadow">
            
            </div>
            <div className="flex flex-col flex-1/3 rounded-xl gap-4 border-1 p-4 transform hover:-translate-y-1">
            <div className="text-xl">Risk Alerts</div>
            <div className="flex flex-row md:flex-col gap-4">
                <div className="flex flex-col bg-red-200 border-l-7 border-red-700 rounded-xl p-3">
                    <div className="font-bold text-red-600">⚠️ High Risk: Data Privacy</div>
                    <div className="text-red-500">Customer Chatbot may expose PII data</div>
                </div>
                <div className="flex flex-col bg-amber-100 border-l-7 border-amber-400 rounded-xl p-3">
                    <div className="font-bold text-amber-400">⚠️ Medium Risk: Complicance</div>
                    <div className="text-amber-300">HR AI tools need GDPR review </div>
                </div>
                <div className="flex flex-col bg-amber-100 border-l-7 border-amber-400 rounded-xl p-3">
                    <div className="font-bold text-amber-400">⚠️ Medium Risk: Security</div>
                    <div className="text-amber-300">API access controls need review</div>
                </div>
            </div>
            
            </div>
        </div>

        <div className="flex gap-4">
            <div className="flex-1/2 flex flex-col gap-4 p-4 border-2 rounded-2xl">
                <div>Active Use Cases</div>
                <div className="flex flex-col gap-3">
                    <div className="bg-blue-100 flex justify-between items-center p-4 rounded-xl">
                        <div>
                            <div className="text-blue-900">Customer Support AI</div>
                            <div className="text-blue-600">Chatbot for customer inquiries</div>
                        </div>
                        <div className="bg-green-200 rounded-3xl">
                            <div className="text-green-400 p-1">Active</div>
                        </div>
                    </div>

                    <div className="bg-blue-100 flex justify-between items-center p-4 rounded-xl">
                        <div>
                            <div className="text-blue-900">Customer Support AI</div>
                            <div className="text-blue-600">Chatbot for customer inquiries</div>
                        </div>
                        <div className="bg-green-200 rounded-3xl">
                            <div className="text-green-400 p-1">Active</div>
                        </div>
                    </div>

                    <div className="bg-blue-100 flex justify-between items-center p-4 rounded-xl">
                        <div>
                            <div className="text-blue-900">Customer Support AI</div>
                            <div className="text-blue-600">Chatbot for customer inquiries</div>
                        </div>
                        <div className="bg-green-200 rounded-3xl">
                            <div className="text-green-400 p-1">Active</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1/2 flex flex-col gap-4 p-4 border-2 rounded-2xl">
            <div>Recent Results</div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b-1 border-gray-300 pb-2 rounded">
                    <div className="flex flex-row justify-center gap-3 items-center">
                        <div className="text-green-500 text-4xl">•</div>
                        <div>
                            <div className="font-bold">GDPR Compliance Check</div>
                            <div className="text-gray-500">All systems passed - June 15,2025</div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="text-green-400 font-bold">Passed</div>
                    </div>
                </div>

                <div className="flex justify-between items-center border-b-1 border-gray-300 pb-2 rounded">
                    <div className="flex flex-row justify-center gap-3 items-center">
                        <div className="text-red-500 text-4xl">•</div>
                        <div>
                            <div className="font-bold">Bias Detection Test</div>
                            <div className="text-gray-500">Issues Found - June 10,2025</div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="text-red-400 font-bold">Failed</div>
                    </div>
                </div>

                <div className="flex justify-between items-center border-b-1 border-gray-300 pb-2 rounded">
                    <div className="flex flex-row justify-center gap-3 items-center">
                        <div className="text-green-500 text-4xl">•</div>
                        <div>
                            <div className="font-bold">Security Assessment</div>
                            <div className="text-gray-500">Minor Issues - June 5,2025</div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="text-amber-400 font-bold">Partial</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
}

export default Home;
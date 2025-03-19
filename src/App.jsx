function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Daisy UI Test</h1>

      {/* Daisy UI Button */}
      <button className="btn btn-primary">Primary Button</button>

      {/* Daisy UI Card */}
      <div className="card w-96 bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <h2 className="card-title">Daisy UI Card</h2>
          <p>If you can see styled components, Daisy UI is working!</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Nice!</button>
          </div>
        </div>
      </div>

      {/* More Daisy UI components */}
      <div className="mt-4">
        <button className="btn btn-outline">Outline</button>
        <button className="btn btn-accent ml-2">Accent</button>
        <button className="btn btn-ghost ml-2">Ghost</button>
      </div>

      {/* Alert component */}
      <div className="alert alert-info mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>Daisy UI is successfully integrated!</span>
      </div>
    </div>
  );
}

export default App;
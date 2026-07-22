function PaymentFailure() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl text-white">!</div>
        <h1 className="mt-5 text-3xl font-semibold text-red-700">Payment could not be completed</h1>
        <p className="mt-3 text-sm text-red-700/80">Please try again or use a different payment method.</p>
        <button className="mt-6 rounded-2xl bg-red-600 px-5 py-3 text-sm font-medium text-white">Try Again</button>
      </div>
    </div>
  );
}

export default PaymentFailure;

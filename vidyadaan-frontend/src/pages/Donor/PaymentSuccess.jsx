function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-3xl text-white">✓</div>
        <h1 className="mt-5 text-3xl font-semibold text-emerald-700">Thank you for donating</h1>
        <p className="mt-3 text-sm text-emerald-700/80">Your contribution has been received successfully. A receipt has been sent to your email.</p>
        <button className="mt-6 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white">Back to Dashboard</button>
      </div>
    </div>
  );
}

export default PaymentSuccess;

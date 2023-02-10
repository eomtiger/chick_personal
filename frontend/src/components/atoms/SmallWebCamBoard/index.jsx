function SmallWebCamBoard({ children }) {
  return (
    <div className="grid grid-rows-4 gap-0 w-[400px] h-full overflow-hidden bg-[#133b60] rounded-[30px] place-items-center">
      {children}
    </div>
  );
}

export default SmallWebCamBoard;
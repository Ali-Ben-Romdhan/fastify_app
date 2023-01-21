

const asyncHandler =
  (fn: any) => (req: Request, res: Reply) =>
    Promise.resolve(fn(req, res)).catch();
export default asyncHandler;
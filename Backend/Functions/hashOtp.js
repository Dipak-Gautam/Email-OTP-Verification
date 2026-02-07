import bcrypt from "bcryptjs";
const hashOtp = async (otp) => {
  const salt = await bcrypt.genSalt(10);
  const hashedOtp = await bcrypt.hash(String(otp), salt);

  return hashedOtp;
};
export default hashOtp;

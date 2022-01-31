interface ICreateUserDTO {
  id?: string;
  avatar: string;
  name: string;
  email: string;
  password: string;
  driverLicense: string;
}

export { ICreateUserDTO };

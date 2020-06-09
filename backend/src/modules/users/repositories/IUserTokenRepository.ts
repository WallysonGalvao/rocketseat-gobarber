import UserToken from '../infra/typeorm/entities/UserToken';

export default interface IUserTokenRepository {
  generate(user_id: string): Promise<UserToken>;
}

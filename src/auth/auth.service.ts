import { BadRequestException, Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}
  async login({ email, password }: LoginDto) {
    const { data, error } =
      await this.supabaseService.client.auth.api.signInWithEmail(
        email,
        password,
      );
    if (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
    return data;
  }
  async register({ email, password }: LoginDto) {
    const { data, error } =
      await this.supabaseService.client.auth.api.signUpWithEmail(
        email,
        password,
      );
    if (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
    return data;
  }

  async logout(token: string) {
    const { error } = await this.supabaseService.client.auth.api.signOut(token);
    if (error) {
      throw new BadRequestException(error);
    }
  }

  async refreshToken(token: string) {
    const { data, error } =
      await this.supabaseService.client.auth.api.refreshAccessToken(token);
    if (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
    return data;
  }
}

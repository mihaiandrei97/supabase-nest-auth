import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly supabaseClient: SupabaseClient = null;

  constructor(private configService: ConfigService) {
    const supabaseEnv =
      this.configService.get<{ apiKey: string; apiUrl: string }>('supabase');

    this.supabaseClient = createClient(supabaseEnv.apiUrl, supabaseEnv.apiKey);
  }

  get client() {
    return this.supabaseClient;
  }
}

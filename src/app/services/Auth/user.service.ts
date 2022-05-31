import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../modules/iuser';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
    return this.http.get(`/users/` + id);
  }

  register(user: User) {
    return this.http.post(`http://localhost:8000/auth/register`, user);
  }

  update(user: User) {
    // return this.http.put(`/users/` + user.id, user);
    return this.http.put(`http://localhost:8000/auth/login` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`/users/` + id);
  }
}

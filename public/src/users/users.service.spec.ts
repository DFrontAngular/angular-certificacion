import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  it('debe exponer usuarios iniciales', () => {
    expect(service.users().length).toBeGreaterThan(0);
    expect(service.users()[0]).toEqual(jasmine.objectContaining({ name: 'Rafa Nuñez' }));
  });

  it('debe agregar un usuario y reflejarlo inmediatamente en users()', () => {
    const initial = service.users().length;
    const nuevo = { name: 'Test User', email: 'test@foo.com', role: 'Admin' as const };
    const creado = service.addUser(nuevo);
    expect(service.users().length).toBe(initial + 1);
    expect(service.users().some(u => u.email === nuevo.email)).toBeTrue();
    expect(creado.name).toBe('Test User');
  });
});

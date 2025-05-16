import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';

@Injectable()
export class IsMasterGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: JwtPayload = request.user;

    if (!user || !user.role) {
      throw new UnauthorizedException('Sem autorização.');
    }

    // Verifica se o usuário tem pelo menos a role ADMIN
    const allowedRoles = ['APPLICATION_MASTER'];
    if (!allowedRoles.includes(user.role)) {
      throw new UnauthorizedException('Sem autorização.');
    }

    return true;
  }
}
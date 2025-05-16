import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: JwtPayload = request.user;

    if (!user || !user.role) {
      throw new UnauthorizedException('Sem autorização.');
    }

    const allowedRoles = ['APPLICATION_MASTER', 'APPLICATION_ADMIN'];
    if (!allowedRoles.includes(user.role)) {
      throw new UnauthorizedException('Sem autorização.');
    }

    return true;
  }
}
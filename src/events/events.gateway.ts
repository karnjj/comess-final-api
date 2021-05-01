import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer() server: Server;
  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
    const { userId } = client.handshake.query;
    console.log(userId);

    this.server.emit('msgToClient', userId);
  }

  afterInit(server: Server) {}

  handleDisconnect(client: Socket) {}

  handleConnection(client: Socket, ...args: any[]) {
    const { userId } = client.handshake.query;
    if (!userId) client.disconnect();
  }
}

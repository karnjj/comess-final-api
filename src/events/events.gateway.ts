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
  afterInit(server: Server) {}

  handleDisconnect(client: Socket) {}

  handleConnection(client: Socket, ...args: any[]) {
    // console.log('connect');
    const { userId, roomId } = client.handshake.query;
    if (!userId) client.disconnect();
    // console.log(roomId);
    client.join(roomId);
  }
}

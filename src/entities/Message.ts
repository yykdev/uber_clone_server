import {
    Entity,
    BaseEntity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    ManyToOne
} from "typeorm";
import Chat from "./Chat";
import User from "./User";

@Entity()
class Message extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Chat, chat => chat.messages)
    chat: Chat;

    @ManyToOne(type => User, user => user.messages)
    user: User;

    @Column({ type: "text" })
    text: String;

    @CreateDateColumn()
    createdAt: String;

    @UpdateDateColumn()
    updatedAt: String;
}

export default Message;

import {
    Entity,
    BaseEntity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    ManyToOne
} from "typeorm";
import { rideStatus } from "src/types/types";
import User from "./User";

@Entity()
class Ride extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
        enum: ["ACCEPTED", "CANCELED", "FINISHED", "REQUESTING", "ONROUTE"]
    })
    status: rideStatus;

    @Column({ type: "text" })
    pickUpAddress: String;

    @Column({ type: "double precision", default: 0 })
    pickUpLat: number;

    @Column({ type: "double precision", default: 0 })
    pickUpLng: number;

    @Column({ type: "text" })
    dropOffAddress: String;

    @Column({ type: "double precision", default: 0 })
    dropOffLat: number;

    @Column({ type: "double precision", default: 0 })
    dropOffLng: number;

    @Column({ type: "double precision", default: 0 })
    price: number;

    @Column({ type: "text" })
    distance: String;

    @Column({ type: "text" })
    duration: String;

    @ManyToOne(type => User, user => user.ridesAsPassenger)
    passenger: User;

    @ManyToOne(type => User, user => user.ridesAsDriver)
    driver: User;

    @CreateDateColumn()
    createdAt: String;

    @UpdateDateColumn()
    updatedAt: String;
}

export default Ride;

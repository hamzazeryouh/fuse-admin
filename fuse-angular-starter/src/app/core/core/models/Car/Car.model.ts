import { User } from "../User/User.model";
import { Feature } from "./Feature.model";
import { Photos } from "./Photos.model";

export interface Car {
    Year?: number;
    Color?: string;
    BodyType?: string;
    Transmission?: string;
    FuelType?: string;
    SeatingCapacity?: number;
    LuggageCapacity?: number;
    Features?: Feature[];
    Price: number;
    IsAvailable: boolean;
    Discount: number;
    Description?: string;
    UserId?: string;
    User?: User;
    Images?: Photos[];
  }
  
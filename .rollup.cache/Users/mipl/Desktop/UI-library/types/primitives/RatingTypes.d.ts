export type RatingType = {
    title: string;
    averageRating: number;
    totalRating: number;
    details: RatingDetailType[];
    topRatingColor?: string;
    midRatingColor?: string;
    lowRatingColor?: string;
    bgColor?: string;
};
type RatingDetailType = {
    percent: number;
    rating: number;
};
export {};

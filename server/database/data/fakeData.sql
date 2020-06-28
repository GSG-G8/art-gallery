INSERT INTO artist
    (first_name,last_name,email,password,mobile_no,customized,
    reviews,profile_img,social_media_accounts,budget,bio)
VALUES
    ('Alaa', 'Swaireh', 'alaa@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592888888', 'false', '10', 'https://avatars1.githubusercontent.com/u/26024288?s=96&v=4', '{https://www.facebook.com/}',
        '200.26', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('mariam', 'Isa', 'mariam@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592000000', 'true', '12', 'https://avatars1.githubusercontent.com/u/26024288?s=96&v=4', '{https://www.instagram.com/}',
        '300.50', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('Rana', 'Obeid', 'rana@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592111111', 'false', '7', 'https://avatars1.githubusercontent.com/u/26024288?s=96&v=4', '{https://www.pinterest.com/}',
        '300.66', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('Rehab', 'ALsawaf', 'rehab@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592333333', 'false', '8', 'https://avatars1.githubusercontent.com/u/26024288?s=96&v=4', '{https://www.facebook.com/}',
        '400.20', 'الفن هو الأسلوب، والأسلوب هو الإنسان'),
    ('Mohammed', 'ALghzali', 'mohammed@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK',
        '0592777777', 'true', '3', 'https://avatars1.githubusercontent.com/u/26024288?s=96&v=4', '{https://www.facebook.com/}',
        '100.23', 'الفن هو الأسلوب، والأسلوب هو الإنسان');

INSERT INTO customer
    (first_name,last_name,email,password,budget)
VALUES
    ('Lina', 'Ebeid', 'lina@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 300.44),
    ('Muhammad', 'Abed', 'mu95@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 200.24),
    ('Ahmed', 'Safi', 'ahmed@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 200.31),
    ('Rawan', 'Abudahrouj', 'rwan@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 600.44),
    ('Abeer', 'Karam', 'abeer@gmail.com', '$2b$10$DcDZvSOFT8wnvO3uA89LGOTqa9rSRiOuaj2f7RxssF9DNwXYaeFXK', 1000.64);

INSERT INTO painting
    (title,img,description,category,property,count_sold,artist_id)
VALUES
    ('طائر الاوز', 'k1xjo9t8d98hnqvjuryl.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طيور', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '1'),
    ('تراث', 'mnzi8ebvwiamcn0iequp.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات تراثية', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '1'),
    ('طبيعة ', 'etw0noytv7njmyqyzqso.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طبيعة', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '2'),
    ('طبيعة ', 'bo9thuetiqbeeg5stupn.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات اسلامية', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '2'),
    ('طبيعة ', 'jhuu1xrli5ksa60cdidz.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات مدن', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '3'),
    ('طبيعة ', 'd1j5kwm7isrhwlb6iids.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات تاريخية', '{"40*60":"70","120*160":"150", "200*140":"250"}', '2', '3'),
    ('طبيعة ', 'miafsnxnynnowco8seem.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طبيعة', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '4'),
    ('طبيعة ', 'ijblovh9mgmaev2ywzpk.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طبيعة', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '4'),
    ('طبيعة ', 'buyogjqipuwnqr6gxyz0.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طبيعة', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '4'),
    ('طبيعة ', 'zdecqqevfn2d64o4qkfx.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طبيعة', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '5');

INSERT INTO cart
    (customer_id,painting_id)
VALUES
    ('1', '1'),
    ('1', '2'),
    ('2', '3'),
    ('2', '4'),
    ('3', '5'),
    ('3', '6'),
    ('4', '7'),
    ('4', '8'),
    ('5', '9'),
    ('5', '10'),
    ('5', '6');

INSERT INTO painting_user
    (painting_id,customer_id,selling_date)
VALUES
    ('1', '1', '2020-6-18'),
    ('2', '1', '2020-6-18'),
    ('3', '2', '2020-6-10'),
    ('4', '2', '2020-6-10'),
    ('5', '3', '2020-6-01'),
    ('6', '3', '2020-6-01'),
    ('6', '5', '2020-6-01'),
    ('7', '4', '2020-6-02'),
    ('8', '4', '2020-6-02'),
    ('9', '5', '2020-6-03'),
    ('10', '5', '2020-6-03');

INSERT INTO feedback
    (artist_id,customer_id,rate,details)
VALUES
    ('1', '1', '5', 'عمل رائع جدا'),
    ('2', '2', '4', 'عمل رائع جدا'),
    ('3', '3', '5', 'عمل رائع جدا'),
    ('3', '5', '5', 'عمل رائع جدا'),
    ('4', '4', '5', 'عمل رائع جدا'),
    ('5', '5', '5', 'عمل رائع جدا');




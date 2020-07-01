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
    ('طائر الاوز', 'https://media.zid.store/0651e4a4-a220-4670-8922-c62f64ff8293/c69cd11f-6321-46b6-91fc-d4ea9769fbdf.jpeg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طيور', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '1'),
    ('تراث', 'https://palumedia.eu/wp-content/uploads/2019/08/2a42c6230069bf74d3090e765c97d6d6.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات تراثية', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '1'),
    ('طبيعة ', 'https://upload.3dlat.com/do.php?img=1129422',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طبيعة', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '2'),
    ('طبيعة ', 'https://upload.3dlat.com/do.php?img=1129422',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات اسلامية', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '2'),
    ('طبيعة ', 'https://upload.3dlat.com/do.php?img=1129422',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات مدن', '{"40*60":"70","120*160":"150", "200*140":"250"}', '1', '3'),
    ('طبيعة ', 'https://upload.3dlat.com/do.php?img=1129422',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات تاريخية', '{"40*60":"70","120*160":"150", "200*140":"250"}', '10', '3'),
    ('طائر جميل ', 'https://cdn.shopify.com/s/files/1/0071/1167/1926/products/Diamond_Painting_Canvas_Animal_Cute_Bird_5d_Diy_Diamond_Painting_Kits_UK_VM89381_grande.jpg?v=1571723908',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طيور', '{"40*60":"70","120*160":"150", "200*140":"250"}', '7', '4'),
    ('طبيعة ', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73408617-26b8-448f-917a-700a75e39e53/d7j32p3-f2f4e29c-c16b-4b62-a9c3-d081dcdb1252.jpg/v1/fill/w_1024,h_768,q_75,strp/11427_beautiful_paintings_of_nature_531_1_by_impfeatherdejudejinx_d7j32p3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NjgiLCJwYXRoIjoiXC9mXC83MzQwODYxNy0yNmI4LTQ0OGYtOTE3YS03MDBhNzVlMzllNTNcL2Q3ajMycDMtZjJmNGUyOWMtYzE2Yi00YjYyLWE5YzMtZDA4MWRjZGIxMjUyLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.RXxZk_qvM-bu8PqDilL7QKr9Jv4tW-lNaw-dGXgPpLQ',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طبيعة', '{"40*60":"70","120*160":"150", "200*140":"250"}', '9', '4'),
    ('خط عربي ', 'https://i.pinimg.com/originals/30/ac/c4/30acc4c772806c0360f548b8740d34b9.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات اسلامية', '{"40*60":"70","120*160":"150", "200*140":"250"}', '8', '4'),
    ('طائر أزرق ', 'https://i.pinimg.com/originals/93/23/fe/9323fe007b1efecc6127d26549fe7900.jpg',
        'لوحة فنية جدارية من قماش الكانفس تتميز بالالوان الطبيعية', 'لوحات طيور', '{"40*60":"70","120*160":"150", "200*140":"250"}', '12', '5');

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




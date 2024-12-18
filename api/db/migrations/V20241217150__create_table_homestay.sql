create table homestay (
    id uuid primary key default uuid_generate_v4(),
    "type" text,
    "name" text,
    "guests" int,
    "bedrooms" int,
    "beds" int,
    "baths" float,
    "location" text,
    "desc" text,
    "date" text,
    "price" int,
    "star" float,
    "reviews" int,
    "images" jsonb,
    "mini_image" text,
    "owner_name" text,
    "owner_avatar" text,
    "created_at" timestamptz default current_timestamp,
    "updated_at" timestamptz null
);

insert into homestay (
    "type",
    "name",
    "guests",
    "bedrooms",
    "beds",
    "baths",
    "location",
    "desc",
    "date",
    "price",
    "star",
    "reviews",
    "images",
    "mini_image",
    "owner_name",
    "owner_avatar",
    "created_at",
    "updated_at"
) VALUES 
(
    'VILLA VENITY Sky',
    'Entire villa',
    14,  
    7,
    7,
    7.5,
    'Nha Trang, Vietnam',
    'Ocean and sea views',
    'Jan 6 - 11',
    1168933,
    4.5,
    150,
    '[
        "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif"
    ]',
    'https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif',
    'John Doe',
    'https://a0.muscache.com/im/pictures/user/859ff25c-c4a3-4aad-8570-1443c6545e45.jpg?im_w=240&im_format=avif',
    current_timestamp,
    NULL
),
(
    'VILLA VENITY Sky',
    'Entire villa',
    14,  
    7,
    7,
    7.5,
    'Nha Trang, Vietnam',
    'Ocean and sea views',
    'Jan 6 - 11',
    1168933,
    4.5,
    150,
    '[
        "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/4fcedaff-6486-4909-ae5f-eb9416c33493.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/147bc828-0613-43e4-8f57-8880d9467d33.jpeg?im_w=720&im_format=avif"
    ]',
    'https://a0.muscache.com/im/pictures/miso/Hosting-31884678/original/bd194e6d-43af-4342-b3ae-d09088d2afbb.jpeg?im_w=720&im_format=avif',
    'John Doe',
    'https://a0.muscache.com/im/pictures/user/859ff25c-c4a3-4aad-8570-1443c6545e45.jpg?im_w=240&im_format=avif',
    current_timestamp,
    NULL
);



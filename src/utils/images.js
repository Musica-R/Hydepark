// Unsplash helper — builds a crisp, optimised HD image url
export const img = (id, w = 1400, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const photos = {
  hero: "photo-1542314831-068cd1dbfeeb",
  exterior: "photo-1564501049412-61c2a3083791",
  exterior2: "photo-1445019980597-93fa8acb246c",
  resort: "photo-1520250497591-112f2f40a3f4",
  pool: "photo-1571896349842-33c89424de2d",
  lobby: "photo-1560448204-e02f11c3d0e2",
  roomDouble: "photo-1611892440504-42a792e24d32",
  roomKing: "photo-1618773928121-c32242e63f39",
  roomSuite: "photo-1590490360182-c33d57733427",
  roomTriple: "photo-1582719478250-c89cae4dc85b",
  roomSingle: "photo-1505693416388-ac5ce068fe85",
  bath: "photo-1578683010236-d716f9a3f461",
  hall: "photo-1519167758481-83f550bb49b3",
  wedding: "photo-1464366400600-7168b8af9bc3",
  conference: "photo-1511578314322-379afb476865",
  dining: "photo-1414235077428-338989a2e8c0",
  dining2: "photo-1517248135467-4c7edcad34c4",
};

export const avatars = [
  "photo-1507003211169-0a1dd7228f2d",
  "photo-1494790108377-be9c29b29330",
  "photo-1500648767791-00dcc994a43e",
  "photo-1438761681033-6461ffad8d80",
  "photo-1472099645785-5658abf4ff4e",
  "photo-1544005313-94ddf0286df2",
];

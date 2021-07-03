import * as fromToppings from "./toppings.action";

describe("Toppings Actions", () => {
  describe("LoadToppings Actions", () => {
    describe("LoadToppings", () => {
      it("should create an action", () => {
        const action = new fromToppings.LoadToppings();

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS,
        });
      });
    });

    describe("LoadToppingsFail", () => {
      it("should create an action", () => {
        const payload = { message: "Load Error" };
        const action = new fromToppings.LoadToppingsFail(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          payload,
        });
      });
    });

    describe("LoadToppingsSuccess", () => {
      it("should create an action", () => {
        const payload = [
          {
            name: "Blazin' Inferno",
            toppings: [
              {
                id: 10,
                name: "pepperoni",
              },
              {
                id: 9,
                name: "pepper",
              },
              {
                id: 3,
                name: "basil",
              },
              {
                id: 4,
                name: "chili",
              },
              {
                id: 7,
                name: "olive",
              },
              {
                id: 2,
                name: "bacon",
              },
            ],
            id: 1,
          },
          {
            name: "Seaside Surfin'",
            toppings: [
              {
                id: 6,
                name: "mushroom",
              },
              {
                id: 7,
                name: "olive",
              },
              {
                id: 2,
                name: "bacon",
              },
              {
                id: 3,
                name: "basil",
              },
              {
                id: 1,
                name: "anchovy",
              },
              {
                id: 8,
                name: "onion",
              },
              {
                id: 11,
                name: "sweetcorn",
              },
              {
                id: 9,
                name: "pepper",
              },
              {
                id: 5,
                name: "mozzarella",
              },
            ],
            id: 2,
          },
          {
            name: "Plain Ol' Pepperoni",
            toppings: [
              {
                id: 10,
                name: "pepperoni",
              },
              {
                id: 2,
                name: "bacon",
              },
              {
                id: 6,
                name: "mushroom",
              },
              {
                id: 5,
                name: "mozzarella",
              },
            ],
            id: 3,
          },
        ];
        const action = new fromToppings.LoadToppingsSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload,
        });
      });
    });
  });
});

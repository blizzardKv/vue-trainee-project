export default {
  async registerCoach(context, data) {
    // eslint-disable-next-line
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(`https://angular-spider-138114.firebaseio.com/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    });

    // const responseData = await response.json();

    if (!response.ok) {
      // ...error;
    }
    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
  async loadCoaches(context) {
    console.log(1);
    const response = await fetch('https://angular-spider-138114.firebaseio.com/coaches.json');
    const responseData = await response.json();

    if (!response.ok) {
      // error
    }

    const coaches = [];

    // eslint-disable-next-line
    for (const key in responseData) {
      const coach = {
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].desc,
        hourlyRate: responseData[key].rate,
        areas: responseData[key].areas,
      };
      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
  },
};

import zd from 'zod'

const movieSchema = zd.object({
  title: zd.string(),
  year: zd.number().int().positive(),
  director: zd.string(),
  duration: zd.number().int(),
  poster: zd.string(),
  genre: zd.array(
    zd.enum(['Action', 'Adventure', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller', 'Sci-Fi']),
    {
      required_error: 'Movie genre is required.',
      invalid_type_error: 'Movie genre must be an array of enum Genre'
    }
  ),
  rate: zd.number().int().default(5)
})

export function validate(input){
  return movieSchema.safeParse(input)
}

export function validateNoOptional(input){
  return movieSchema.partial().safeParse(input)
}

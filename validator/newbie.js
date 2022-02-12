exports.newbieValidator = (req, res, next) => {
    req.check("name", "Name is required").notEmpty()
    req.check("email", "Email must be between 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min: 4,
        max: 32
    });
    req.check("phone", "phone number is required")
    req.check("phone")
    .isLength({min: 11})
    .withMessage("Phone number must contain at least 11 numbers")
    req.check("gender", "Gender is required").notEmpty()
    .withMessage("Gender is required")
    req.check("dob", "Date of Birth is required").notEmpty()
    .withMessage("Date of Birth is required")
    req.check("sof", "State of Origin is required").notEmpty()
    .withMessage("State of Origin is required")
    req.check("cef", "Course is required").notEmpty()
    .withMessage("Course is required")

    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};